import axios from "axios"



export function loading() {
    return {
      type: "LOADING",
    }
  }

  export function productos() {
    return async function (dispatch) {
      dispatch(loading())
      try {
        const URL = 'https://api.mercadolibre.com/sites/MLA/search?q=items'
        const { data: result } = await axios.get(URL)
      } catch (error) {
        console.log(error);
      }
    }
  }

export function searchProduct(title) {
    return async function (dispatch) {
      dispatch(loading())
      try {
        const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${title}`
        const { data: result } = await axios.get(URL)
  
        return dispatch({
          type: "SEARCH_PRODUCT",
          payload: result.results
        })
  
      } catch (error) {
        console.log(error);
      }
    }
  }

  export function offers() {
    return async function (dispatch) {
        dispatch(loading())
        try {
            const URL = `https://api.mercadolibre.com/sites/MLA/search?q=items?limit=20`
            const { data: result } = await axios.get(URL)
            const offers = result.results?.slice(0, 5)

            return dispatch({
                type: "OFFERS",
                payload: offers
            })
    
        } catch (error) {
          console.log(error);
        }
      }
  }

  export function number(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  export function verDetail(id) {
    return async function (dispatch) {
      dispatch(loading())
      try {
        const URL = `https://api.mercadolibre.com/items/${id}`
        const result = await axios.get(URL)
  
        return dispatch({
          type: "DETAIL",
          payload: result.data
        })
  
      } catch (error) {
        console.log(error);
      }
    }
  }

  export function cleanSearch() {
    return{
      type: "CLEAN_SEARCH",
    }
  }