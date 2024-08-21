// let BasicPlan ={
//     SocialMediaManagement: "1month",
//     SocialMediaPosts: 10,
//     WebsiteDevelopment: false,
//     AndroidAppDevelopment: false,
//     IOSAppDevelopment: false,
//     MotionGraphics: '5 videos',
//     SEOServ0ice: false,
//     PriceInUSD: 100,
//     Discount: 50,
//     DiscountMonth: [8]
// }
// let StandardPlan= {
//     SocialMediaManagement: "3Months",
//     SocialMediaPosts: 25,
//     WebsiteDevelopment: true,
//     AndroidAppDevelopment: false,
//     IOSAppDevelopment: false,
//     MotionGraphics: "10 Videos",
//     SEOService: false,
//     PriceInUSD: 250,
//     Discount: 50,
//     DiscountMonth: [8]
// }
// let PremiumPlan= {
//     SocialMediaManagement: "6Months",
//     SocialMediaPosts: 50,
//     WebsiteDevelopment: true,
//     AndroidAppDevelopment: true,
//     IOSAppDevelopment: true,
//     MotionGraphics: "10 Videos",
//     SEOService: true,
//     PriceInUSD: 1000,
//     Discount: 50,
//     DiscountMonth: [8]
// }
// function BPlan() {
//     let price = BasicPlan.PriceInUSD;
//     let curDate = new Date();
//     let curMonth = curDate.getMonth();

//     for (var i = 0; i<BasicPlan.DiscountMonth.length; i++) {
//         if(BasicPlan.DiscountMonth[i] === curMonth){
//             price = BasicPlan.PriceInUSD/2;
//             break;
//         }
//     }
//     return price;
// }



// function SPlan() {
//     let price = StandardPlan.PriceInUSD;
//     let curDate = new Date();
//     let curMonth = curDate.getMonth();
//     for (var i = 0; i<StandardPlan.DiscountMonth.length; i++) {
//         if(StandardPlan.DiscountMonth[i] === curMonth){
//             price = StandardPlan.PriceInUSD/2;
//             break;
//         }
//     }
//     return price;
// }


// function PPlan() {
//     let price = PremiumPlan.PriceInUSD;
//     let curDate = new Date();
//     let curMonth = curDate.getMonth();
//     for (var i = 0; i<PremiumPlan.DiscountMonth.length; i++) {
//         if(PremiumPlan.DiscountMonth[i] === curMonth){
//             price = PremiumPlan.PriceInUSD/2;
//             break;
//         }
//     }
//     return price;
// }
// let PremiumPlanPrice = PPlan();
// let BasicPlanPrice = BPlan();
// let StandardPlanPrice = SPlan();
// console.log("The Price of Basic Plane is:" + BasicPlan.PriceInUSD);
// console.log("50% Discounted Price of Basic Plan is: " + BasicPlanPrice);
// console.log("The Price of Standard Plane is:" + StandardPlan.PriceInUSD);
// console.log("50% Discounted Price of Standard Plan is: " + StandardPlanPrice);
// console.log("The Price of Premium Plane is:" + PremiumPlan.PriceInUSD);
// console.log("50% Discounted Price of Premium Plan is: " + PremiumPlanPrice);

let student = {
    Maths: 70,
    English: 89,
    Physics: 70, 
    Computer: 99,
    Percentage: function (TotalMarks) {
        let ObtainedMarks = student.Computer + student.English + student.Maths + student.Physics
        console.log(ObtainedMarks);
        let Percentage = ObtainedMarks/TotalMarks*100;
        console.log("Your Percentage is: " +Percentage);
        console.log(TotalMarks);
        if(Percentage >= 50){
            console.log("You are passed");
        }
        else{
            console.log("You are Failed");
        }
        return(Percentage)
    }
}
// function PercentageCalculate(TotalMarks) {
//     let ObtainedMarks = student.Computer + student.English + student.Maths + student.Physics
//     console.log(ObtainedMarks);
//     let Percentage = ObtainedMarks/TotalMarks*100;
//     console.log("Your Percentage is: " +Percentage);
//     console.log(TotalMarks);
//     if(Percentage >= 50){
//         console.log("You are passed");
//     }
//     else{
//         console.log("You are Failed");
//     }
//     return("Yabc")
// };
console.log(student.Percentage(400));