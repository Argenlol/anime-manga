import React from 'react';
import { useReducer } from 'react';
import { API } from '../helpers/constants';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { calcSubPrice, calcTotalPrice } from '../helpers/CartFuction';


export const MangaContext = React.createContext()

const INIT_STATE = {
    anime: [],
    edit: null,
    paginatedPages: 1,
    cart: {},
    cartLength: 0,
    detail: {}
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_MANGAS":
            return {
                ...state, anime: action.payload.data,
                paginatedPages: Math.ceil(action.payload.headers["x-total-count"] / 6)
            }
        case "GET_EDIT_MANGA":
            return {
                ...state, edit: action.payload
            }
        case "GET_DETAIL_MANGA":
            return { ...state, detail: action.payload }
        case "CHANGE_CART_COUNT":
            return { ...state, cartLength: action.payload }
        case "GET_CART":
            return { ...state, cart: action.payload }


        default: return state
    }
}

const MangaContextProvider = ({ children }) => {
    const history = useHistory()
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getMangas = async (history) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 6)
        history.push(`${history.location.pathname}?${search.toString()}`)

        let data = await axios(`${API}/anime${window.location.search}`)
        dispatch({
            type: "GET_MANGAS",
            payload: data
        })
    }

    const addManga = async (newManga) => {
        try {
            let res = await axios.post(`${API}/anime`, newManga)
            return res
        }
        catch (err) {
            console.log(err);
            return err
        }
    }

    const editManga = async (id) => {
        const { data } = await axios.get(`${API}/anime/${id}`)
        dispatch({
            type: "GET_EDIT_MANGA",
            payload: data
        })
    }

    const saveEditManga = async (editedManga) => {
        try {
            let res = await axios.patch(`${API}/anime/${editedManga.id}`, editedManga)
            return res
        } catch (err) {
            console.log(err);
        }
    }

    const deleteManga = async (id, history) => {
        await axios.delete(`${API}/anime/${id}`)
        getMangas(history)
    }

    const deleteCart = async (id, history) => {
        await axios.delete(`${API}/cart/${id}`)
        getMangas(history)
    }
    const addMangaInCart = (manga) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                anime: [],
                totalPrice: 0
            }
        }

        let newManga = {
            item: manga,
            count: 1,
            subPrice: 0
        }
        let filteredCart = cart.anime.filter(elem => elem.item.id === manga.id)
        if (filteredCart.length > 0) {
            cart.anime = cart.anime.filter(elem => elem.item.id !== manga.id)
        } else {
            cart.anime.push(newManga)
        }
        newManga.subPrice = calcSubPrice(newManga)
        cart.totalPrice = calcTotalPrice(cart.anime)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.anime.length

        })
    }
    const getCartLength = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                anime: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.anime.length
        })

    }
    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                anime: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }

    const changeMangaCount = (count, id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.anime = cart.anime.map(elem => {
            if (elem.item.id === id) {
                elem.count = count
                elem.subPrice = calcSubPrice(elem)
            }
            return elem
        })
        cart.totalPrice = calcTotalPrice(cart.anime)
        localStorage.setItem('cart', JSON.stringify(cart))
        getCart()
    }
    const buy = (history) => {
        localStorage.clear()
    }
    const checkMangaInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                anime: [],
                totalPrice: 0
            }
        }
        let newCart = cart.anime.filter(elem => elem.item.id === id)
        return newCart.length > 0 ? true : false
    }

    const getDetail = async (id) => {
        const { data } = await axios.get(`${API}/anime/${id}`)
        dispatch({
            type: "GET_DETAIL_MANGA",
            payload: data
        })
    }


    return (
        <MangaContext.Provider value={{
            anime: state.anime,
            edit: state.edit,
            paginatedPages: state.paginatedPages,
            cart: state.cart,
            cartLength: state.cartLength,
            detail: state.detail,
            getMangas,
            addManga,
            editManga,
            saveEditManga,
            deleteManga,
            getCart,
            addMangaInCart,
            changeMangaCount,
            checkMangaInCart,
            getCartLength,
            deleteCart,
            getDetail,
            buy,
        }}>
            {children}
        </MangaContext.Provider>
    )

}

export default MangaContextProvider
