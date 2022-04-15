//Does not work yet, but the idea was to imitate the circle class so that this class can be used as a proxy to be called from html.
class ProxyCircle extends Circle{
    proxyDrawShape(){
        return super.drawShape(context);
    }
    proxyRulebookOnclick(){
        return super.rulebookOnclick() + console.log("yes");
    }

    proxyRulebookCircle(){
        return this.rulebookCircle.drawShape(context);
    }
}
