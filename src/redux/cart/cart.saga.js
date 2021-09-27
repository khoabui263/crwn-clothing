import { call, all, takeLatest, put } from "redux-saga/effects";

import userActionType from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(userActionType.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSaga() {
    yield all([call(onSignOutSuccess)])
}