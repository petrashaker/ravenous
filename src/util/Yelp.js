const apiKey = 'q-RH2hU6uv_RR3lJ_kXkYHupTDFINJkFOl7N4I7DtnNch7_RC2yj7fWDYjYGS6z4uj6RaHyQBagCBwbJ7P3lQaAGGYdwk2XCTkpKGQLb1ua-TQfzvJ03CGRhPfxAYXYx';

const Yelp = {
    async search(term, location, sortBy) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.postal_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.reviews
            }));
        }
    }
};
  
export default Yelp;
 