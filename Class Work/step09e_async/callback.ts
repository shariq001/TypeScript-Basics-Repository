function MyName() {
    console.log("Muhammad Shariq");
}

function CallMe(callback: () => void) {
    callback()
}
CallMe(MyName)