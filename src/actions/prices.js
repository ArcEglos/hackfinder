export const SELECT_PRICE = 'SELECT_PRICE'
export const REDEEM_PRICE_END = 'REDEEM_PRICE_END'

export function selectPrice (key) {
  return {type: SELECT_PRICE, key}
}

export function redeemPrice (price) {
  return (dispatch, {api}) => {

  }
}
