function domainName(url){
    let regex = /(https?:\/\/)?(www\.)?/
    url = url.replace(regex, '');
    
    regex = /\..*/g
    url = url.replace(regex, '');
    return url
}

let url = "https://www.cnet.com";
console.log(domainName(url));
url = "http://github.com/carbonfive/raygun"
console.log(domainName(url));