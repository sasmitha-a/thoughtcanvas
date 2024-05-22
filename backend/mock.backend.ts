import { Post } from "../src/app/core/model/post.model";
import { PricingOffer } from "../src/app/core/model/pricing-offer.model";


//Posts/Articles
export const mockPosts:Post[] = [
    // {
    //     id: '1st ID',
    //     title: 'Search engine optimization',
    //     content: '1st Mock Content',
    //     urlPhoto: '../../../../../assets/random-img-example.jpg'
    // },
    {
        id: '2nd ID',
        title: 'Laaaaaaarge Content',
        content: '2nd Mock Content',
        urlPhoto: 'https://fastly.picsum.photos/id/520/200/200.jpg?hmac=gq6GVKg64GMqsvk_d6gzXZ7L1htska1jEdgBnAwm4xU',
    },
    {
        id: '3rd ID',
        title: 'Let´s swim together',
        content: '3rd Mock Content',
        urlPhoto: 'https://fastly.picsum.photos/id/841/200/200.jpg?hmac=jAPzaXgN_B37gVuIQvmtuRCmYEC0lJP86OZexH1yam4'
    },
    {
        id: '4th ID',
        title: 'Welcome to the Jungle',
        content: '3rd Mock Content',
        urlPhoto: 'https://fastly.picsum.photos/id/109/200/200.jpg?hmac=vqAWt9QCvOo67gp7N7_-QeMlU5k0G47VIWM_B8Js-ww'
    },
    {
        id: '5th ID',
        title: 'An interesting perspective of life',
        content: '5th content',
        urlPhoto: 'https://fastly.picsum.photos/id/952/200/200.jpg?hmac=6jMF0yOT214qb0hW6aUyexMo9flTRxyQbV8jYPcVolM',
    },
    {
        id: '6th ID',
        title: 'Home by the Sea',
        content: '5th content',
        urlPhoto: 'https://fastly.picsum.photos/id/986/200/200.jpg?hmac=Rqj6CXpaNxwumR7JjJGP9zm2AX92QkYPfNgufdAlpkY'

    }  ,
    {
        id: '7th ID',
        title: 'Studying yourself',
        content: '5th content',
        urlPhoto: 'https://fastly.picsum.photos/id/20/800/800.jpg?hmac=sH0rrI15LYL1gL5Kk-CtGwe5SrAPimAS-ZQyFajNzVk'

    }  
];


//Pricing Offers
export const mockPricingOffers:PricingOffer[] = [
{
    title: 'Free Plan: Basic Access',
    featuresList : ['Create and Share Posts','Read Community Content', 'Basic Analytics'],
    price: 'Free',
    sloganPrice: 'Just sign up & start!'
},
{
    title: 'Standard Plan: Pro Writer',
    featuresList : ['Everything in Basic Access','Advanced Publishing Tools', 'Enhanced Analytics', 'Ad-Free Experience'],
    price: '$9.99/month',
    sloganPrice: 'Elevate your writing game!'
},
{
    title: 'Premium Plan: Elite Contributor',
    featuresList : ['All Pro Writer Benefits','Personalized Branding Options', 'Priority Support','Exclusive Community Access'],
    price: '$19.99/month',
    sloganPrice: 'Unlock the full potential!'
}
];