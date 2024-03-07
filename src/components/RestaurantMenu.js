import { useParams} from 'react-router-dom';
import Shimmer from './Shimmer';
// import ShimmerMenu from './ShimmerMenu';
import { CDN_URL } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurentCategory';
import { useState } from 'react';

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo=useRestaurantMenu(resId)
  const [showIndex,setshowIndex]=useState(null)
  // console.log(resId);
  
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
    c.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  )

  return (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>
        {cuisines.join(', ')}-{costForTwoMessage}
      </p>
      {categories.map((category, index)=>(
         <RestaurantCategory key={category?.card?.card.title} 
         data={category?.card?.card}
         ShowItems={index === showIndex ? true: false}
         setshowIndex={()=>setshowIndex(index)}
         />
      ))}
    </div>
  );
};

export default RestaurantMenu;
