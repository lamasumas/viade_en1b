import { uploadRouteToPod } from './../../solid/routes.js'

export const createRoute = (route) => {
    return (dispatch, getState) => {
        //make async code
        dispatch({
            type: 'CREATE_ROUTE',
            route: route
        })
    }
}

export const showRoute = (route) => {
    return (dispatch, getState) => {
        getState().route.selectedRoute = route
        console.log(getState())
        dispatch({
            type: 'SHOW_ROUTE',
            route
        })
    }
}

export const uploadRoute = (route) => {
    return (dispatch, getState) => {
        const newRoute = {
            id: Object.keys(getState().route.routes).length,
            name: route.name,
            description: route.description,
            author: route.author,
            positions: route.positions === "" ? "" : JSON.parse(route.positions),
            file: route.file,
            images: route.images,
            videos: route.videos
        }
        uploadRouteToPod(newRoute)
        getState().route.routes[getState().route.routes.length]=newRoute
        console.log(getState())
        dispatch({
            type: 'UPLOAD_ROUTE',
            newRoute
        })
    }
}

