import {request, onSuccess, onError} from '../redux/slices/fakeSlice';

export default function callAPI(dispatch) {
    dispatch(request());

    try {
        //throw new Error();

        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "fake-url");
        xhttp.send();
        
        xhttp.onload = function() {
            for (let i = 0; i < 3000000000; i++) { }
            const result = { name: "fake", email: "fake@gmail.com" };
            dispatch(onSuccess(result));
        }
    }
    catch (err) {
        console.log(err);
        dispatch(onError());
    }
}