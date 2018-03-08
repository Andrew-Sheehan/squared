import * as $ from "jquery";

class Square {
    private CLICK:string = "click";

    constructor() {
        $("#squareBtn").on(this.CLICK, () => {
            this.getSquaredValue();
        });
    }

    getSquaredValue():void {
        let val:string = $("#target").val() as string;

        const _number:Number = new Number(val);
        let sqVal:number = (_number.valueOf() * _number.valueOf()) as number;

        $("p").html(`The square of ${val} is ${(sqVal).toFixed(2)}`);
    }
}

export {Square};