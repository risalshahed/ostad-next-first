// SERVER SIDE RENDERING (SSR)

async function getData() {
  let res = await fetch('https://dummyjson.com/products');
  let data = await res.json();
  // console.log(data);
  return data.products;
}


export default async function page() {

  const data = await getData();

  return (
    <div>
      {
        data?.map((item, index) =>
          <div key={index}>
            <h1>{item.title}</h1>
          </div>
        )
      }
    </div>
  )
}