const Button = ({btnType, btnText,handler}) => {

    if (btnType === 'success') {
        return <button className="btn btn-success pt-2 margin-right-5" onClick={handler}>{btnText}</button>;
}   else if (btnType === 'danger'){
        return <button className="btn btn-danger button-padding-adjustment-todoitem mt-2" onClick={handler}>{btnText}</button>;
} else{
        return <button className="btn btn-primary" onClick={handler}>{btnText}</button>;
}
};

export default Button;