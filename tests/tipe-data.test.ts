describe('Data Type', function () {
    it('should must declare', function () {
        let name: string = "Ahdian Mirza Azri";
        let balance: number = 10000;
        let isVip: boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isVip);

        // name = 100; //error
        // balance = "ahdian"; //error
        // isVip = 100; //error
    })
})