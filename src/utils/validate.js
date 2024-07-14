export const checkValidateDate = (email, pswd) => {

    const isEmailValid =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswdValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pswd);

    if(!isEmailValid)
        return('Type Correct Email');

    if(!isPasswdValid)
        return('Type Correct Password');

    return null;
}
