window.addEventListener('load',function () {
    const loc = this.window.location.href;
    this.console.log(loc);
    const i = loc.indexOf('#');
    this.console.log(i);
    if(i >= 1){
        const lang = loc.substring(i + 1);
        this.console.log(lang);
        $('#'+ lang +'-tab').tab('show');
    }
});