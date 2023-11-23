import { faBolt, faArrowsSpin, faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

const ENDPOINTS_CODE = {
  CATEGORY_ALL: "CATEGORY_ALL",
  PRODUCTS_ALL: "PRODUCTS_ALL",
  PRODUCT_DETAIL: "PRODUCT_DETAIL",
  USERS_ALL: "USERS_ALL",
  EXIST_NAME: "EXIST_NAME",
  USER_CREATE: "USER_CREATE",
  USER_ID: "USER_ID",
  PRODUCT_CREATE: "PRODUCT_CREATE",
  PRODUCT_EDIT: "PRODUCT_EDIT",
  USER_EDIT_ROLE: "USER_EDIT_ROLE",
  USER_VALIDATION: "USER_VALIDATION",
  PRODUCTS_PAGINATED: "PRODUCTS_PAGINATED",
  FEATURES_ALL: "FEATURES_ALL",
  FAVORITES_ADD: "FAVORITES_ADD",
  FAVORITES_ALL: "FAVORITES_ALL",
  FAVORITES_RMV: "FAVORITES_RMV",
  PRODUCT_DELETE: "PRODUCT_DELETE",
}

const ENV = {
  PRODUCTION: "PRODUCTION",
  DEVELOPMENT: "DEVELOPMENT",
  LOCAL: "LOCAL",
}

const FEATURE_ICONS = {
  electric: faBolt,
  continuous: faArrowsSpin,
  imported: faEarthAmericas,
}

export { ENDPOINTS_CODE, ENV, FEATURE_ICONS }
