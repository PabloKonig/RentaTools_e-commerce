import {
  getAllProductsEndpoint,
  getCategoriesEndpoint,
  getProductDetailEndpoint,
  postNewProductEndpoint,
  deleteProductEndpoint,
  getAllUsersEndpoint,
  getIfNameExistsEndpoint,
  postSignUpUserEndpoint,
  putEditedProductEndpoint,
  patchEditedInformationEndpoint,
  postUserValidationEndpoint,
  getProductsByQueryParamsEndpoint,
  getFeaturesAllEndpoint,
  postAddFavoriteEndpoint,
  getAllFavoritesEndpoint,
  deleteFavoriteEndpoint,
  getUserEndpoint,
} from "./endpoints"

const GET_ENDPOINTS_CODE = {
  FEATURES_ALL: getFeaturesAllEndpoint,
  CATEGORY_ALL: getCategoriesEndpoint,
  PRODUCTS_ALL: getAllProductsEndpoint,
  PRODUCT_DETAIL: getProductDetailEndpoint,
  USERS_ALL: getAllUsersEndpoint,
  USER_ID: getUserEndpoint,
  EXIST_NAME: getIfNameExistsEndpoint,
  PRODUCTS_PAGINATED: getProductsByQueryParamsEndpoint,
  FAVORITES_ALL: getAllFavoritesEndpoint,
}

const POST_ENDPOINTS_CODE = {
  USER_CREATE: postSignUpUserEndpoint,
  PRODUCT_CREATE: postNewProductEndpoint,
  USER_VALIDATION: postUserValidationEndpoint,
  FAVORITES_ADD: postAddFavoriteEndpoint,
}

const PUT_ENDPOINTS_CODE = {
  PRODUCT_EDIT: putEditedProductEndpoint,
}

const PATCH_ENDPOINTS_CODE = {
  USER_EDIT_ROLE: patchEditedInformationEndpoint,
}

const DELETE_ENDPOINTS_CODE = {
  FAVORITES_RMV: deleteFavoriteEndpoint,
  PRODUCT_DELETE: deleteProductEndpoint,
}

export const getInformationFromEndpoints = async (endpoint, id = "", categoryId = null, page = 1, productsByPage = 10, totalPages) => {
  const getInfo = async () => {
    const response = await fetch(GET_ENDPOINTS_CODE[endpoint](id, categoryId, page, productsByPage, totalPages)).then((response) =>
      response.json()
    )
    return response
  }
  const dataParsed = await getInfo(id)
    .then((result) => {
      return result
    })
    .catch((e) => e)
  return dataParsed
}

export const postNewInformation = async (endpoint, information) => {
  try {
    const postInfo = async (prod) => {
      const response = await fetch(POST_ENDPOINTS_CODE[endpoint](), {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // FALTA PASARLE EL TOKEN DE AUTENTICACIÓN
        },
        body: JSON.stringify(prod),
      })
        .then((response) => response)
        .catch((err) => err)
      return response
    }

    const postResponse = await postInfo(information).then((result) => result)
    return postResponse
  } catch (error) {
    error
  }
}

export const deleteInformation = async ({ id = "", body = "", endpoint }) => {
  const deleteInfo = async (productId, body) => {
    const response = await fetch(DELETE_ENDPOINTS_CODE[endpoint](productId), {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // FALTA PASARLE EL TOKEN DE AUTENTICACIÓN
      },
      body: JSON.stringify(body),
      // FALTA PASARLE EL TOKEN DE AUTENTICACIÓN
    })
      .then((response) => response)
      .catch((err) => err)
    return response
  }
  const deleteResponse = await deleteInfo(id, body)
    .then((result) => result)
    .catch((err) => err)

  return deleteResponse
}

export const putEditedInformation = async (endpoint, information, id) => {
  try {
    const putInfo = async (prod, id) => {
      const response = await fetch(PUT_ENDPOINTS_CODE[endpoint](id), {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // FALTA PASARLE EL TOKEN DE AUTENTICACIÓN
        },
        body: JSON.stringify(prod),
      })
        .then((response) => response)
        .catch((err) => err)
      return response
    }
    const putResponse = await putInfo(information, id).then((result) => result)
    return putResponse
  } catch (error) {
    error
  }
}

export const patchEditedInformation = async (endpoint, information, id) => {
  try {
    const patchInfo = async (prod, id) => {
      const response = await fetch(PATCH_ENDPOINTS_CODE[endpoint](id), {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // FALTA PASARLE EL TOKEN DE AUTENTICACIÓN
        },
        body: JSON.stringify(prod),
      })
        .then((response) => response)
        .catch((err) => err)
      return response
    }
    const patchResponse = await patchInfo(information, id).then((result) => result)
    return patchResponse
  } catch (error) {
    error
  }
}
