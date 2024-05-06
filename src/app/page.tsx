import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-neutral-200 py-20">


      <article className="bg-neutral-100 mt-20 p-5 rounded shadow w-1240 mx-auto">

        <figure className="grid grid-cols-3 gap-5">

          <figcaption className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Fitness Tracker</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere laudantium consectetur laborum, possimus praesentium! Iusto, facilis laudantium!</p>
            </div>

            <button className="bg-blue-500 w-max hover:bg-blue-700 duration-200 text-lg rounded px-3 py-1 text-white">Click Here!</button>
          </figcaption>

          {/* temp */}
          <div className="bg-neutral-300 h-410 col-span-2 rounded-xl"></div>

        </figure>

      </article>


      <section className="bg-neutral-100 mt-40 shadow-sm">
        <div className="grid grid-cols-3 gap-10 py-16 w-1240 mx-auto">
          <figure>
            {/* temp */}
            <div className="bg-neutral-300 h-64 w-64 mx-auto col-span-2 rounded-full"></div>
            <figcaption>
              <h2 className="font-bold text-lg mt-5 text-center">Products</h2>
              <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, aliquam. Nemo recusandae molestiae corporis minima.</p>
            </figcaption>
          </figure>

          <figure>
            {/* temp */}
            <div className="bg-neutral-300 h-64 w-64 mx-auto col-span-2 rounded-full"></div>
            <figcaption>
              <h2 className="font-bold text-lg mt-5 text-center">Facilities</h2>
              <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, aliquam. Nemo recusandae molestiae corporis minima.</p>
            </figcaption>
          </figure>

          <figure>
            {/* temp */}
            <div className="bg-neutral-300 h-64 w-64 mx-auto col-span-2 rounded-full"></div>
            <figcaption>
              <h2 className="font-bold text-lg mt-5 text-center">Community</h2>
              <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, aliquam. Nemo recusandae molestiae corporis minima.</p>
            </figcaption>
          </figure>

          
        </div>
      </section>



      <section className="bg-neutral-100 mt-40 mb-40 p-5 rounded shadow w-1240 mx-auto">
        <figure className="grid grid-cols-5 gap-10">
          <div className="col-span-3 bg-neutral-300 h-full rounded-xl"></div>
          <figcaption className="col-span-2">
            <h2 className="text-2xl mb-3 font-bold">About the Team</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel provident dolor quas sapiente 
              suscipit aut enim fuga cumque tempora maiores maxime totam soluta, nemo qui distinctio 
              consequuntur aspernatur ad porro minima numquam in quos ut commodi. Earum, eveniet. 
              Odio voluptatem nesciunt ipsam saepe? Ut cupiditate asperiores nemo?
              <br /> 
              Repudiandae, fuga illo 
              odio esse explicabo dicta voluptates omnis eum qui odit tenetur eaque exercitationem, laborum
              dolore alias, suscipit ut temporibus. Repellat fugiat molestiae, doloribus suscipit, 
              consectetur qui eos maiores illum quasi quisquam, nam quae eius dolorum rem sapiente nesciunt 
              provident nostrum veritatis! Soluta sint id minus incidunt dolores! Odit quos harum cumque?
            </p>
          </figcaption>
        </figure>
      </section>

    </main> 
  );
}
