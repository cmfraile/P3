const regularExpressions:{[key:string]:RegExp} = {
    emailRegExp:new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/),
    urlRegExp:new RegExp(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
}

export default regularExpressions