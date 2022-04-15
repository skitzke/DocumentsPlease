

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
