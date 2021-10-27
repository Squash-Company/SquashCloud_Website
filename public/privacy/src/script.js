
var preferredLanguages = navigator.language
var mUrl = refactorUrl(window.location.href);


//  Check language and redirect to correct pdf file
/*if(preferredLanguages != null || preferredLanguages != ""){
    preferredLanguages = preferredLanguages.toLowerCase();

    if (preferredLanguages.includes('en')) {
        window.open( mUrl + 'asset/Squash_Privacy_Policy_EN.pdf', "_self")
    } else if (preferredLanguages.includes('pt')) {
        window.open(mUrl +  'asset/Squash_Privacy_Policy_PT_BR.pdf', "_self")
    }
}*/

//  Method to refactor the url
function refactorUrl(url){
    if (url.indexOf("?") > 0) 
        url = url.substring(0, url.indexOf("?"));

    if(!url.endsWith("/")) 
        url = url + "/";

    url = url.replace("/index.html", "");
    return url;
}