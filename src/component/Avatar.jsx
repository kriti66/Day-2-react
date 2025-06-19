import Profile from "./profile";


export default function Avatar() {
    const arr=[
    { img : "https://i.imgur.com/1bX5QH6.jpg", alt: "Lin Lanying" , price:"500"},
    { img : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg", alt: "Manisha Basnet", price:"600"  },
    { img : "https://i.imgur.com/1bX5QH6.jpg", alt: "Kriti Bista" ,price:"800"},
    { img : "https://i.imgur.com/1bX5QH6.jpg", alt: "Shristi Dahal" ,price:"500"},
    ];
  
  return (
    <div className="flex gap-5">
    {arr.map((obj, index) => (
    <Profile img={obj.img} alt={obj.alt}  price={obj.price} key={index}/>
  ))}
  </div>
  );
}
