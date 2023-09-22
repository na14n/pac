import Link from "next/link";

export default function BlogPage({ params }) {
    return (
        <main className="w-full min-h-screen h-fit flex flex-col px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-48">
            <div className="w-full bg-[#007811] aspect-[16/3] max-lg:aspect-video absolute top-0 left-0 -z-10" />
            {/* Breadcrumbs */}
            <div className="mt-24 w-full h-fit flex gap-2 mb-8">
                <Link href={`/blogs`} className="font-bold hover:underline text-pac-orange hover:text-nav-orange" >Blogs</Link>
                <p className="text-white">&gt;</p>
                <span className="font-semibold text-white">{params.id}</span>
            </div>
            <div className="w-full h-fit p-8 bg-white rounded-sm shadow-md flex gap-4">
                <div className="md:w-2/5 aspect-video test shrink-0"></div>
                <div className="w-full h-fit test">
                    <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                        Blog Title
                    </h1>
                </div>
            </div>
            <div className="w-full test my-12 flex flex-col items-center gap-6">
                <p className="text-justify max-w-[75ch]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu semper odio, in euismod erat. Mauris tempus lobortis sapien, ut convallis dolor aliquam consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eu accumsan sapien, vitae euismod ligula. Nulla molestie magna lectus, non commodo libero consectetur a. Praesent orci metus, vestibulum sit amet purus non, vestibulum placerat justo. Mauris facilisis egestas diam. Integer malesuada id ipsum eu vehicula. Cras eu enim posuere, tempus lectus ut, varius lectus. Sed iaculis lorem quis dapibus lacinia. Maecenas auctor, ante at cursus malesuada, dui lorem gravida urna, eget consequat diam odio in erat. Pellentesque elementum, felis et congue bibendum, sapien leo rhoncus purus, vel efficitur leo ante quis velit. Morbi rhoncus malesuada erat, ut consectetur eros hendrerit quis. In dictum enim ac magna bibendum consectetur.
                </p>
                <p className="text-justify max-w-[75ch]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu semper odio, in euismod erat. Mauris tempus lobortis sapien, ut convallis dolor aliquam consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eu accumsan sapien, vitae euismod ligula. Nulla molestie magna lectus, non commodo libero consectetur a. Praesent orci metus, vestibulum sit amet purus non, vestibulum placerat justo. Mauris facilisis egestas diam. Integer malesuada id ipsum eu vehicula. Cras eu enim posuere, tempus lectus ut, varius lectus. Sed iaculis lorem quis dapibus lacinia. Maecenas auctor, ante at cursus malesuada, dui lorem gravida urna, eget consequat diam odio in erat. Pellentesque elementum, felis et congue bibendum, sapien leo rhoncus purus, vel efficitur leo ante quis velit. Morbi rhoncus malesuada erat, ut consectetur eros hendrerit quis. In dictum enim ac magna bibendum consectetur.
                </p>
                <p className="text-justify max-w-[75ch]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu semper odio, in euismod erat. Mauris tempus lobortis sapien, ut convallis dolor aliquam consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eu accumsan sapien, vitae euismod ligula. Nulla molestie magna lectus, non commodo libero consectetur a. Praesent orci metus, vestibulum sit amet purus non, vestibulum placerat justo. Mauris facilisis egestas diam. Integer malesuada id ipsum eu vehicula. Cras eu enim posuere, tempus lectus ut, varius lectus. Sed iaculis lorem quis dapibus lacinia. Maecenas auctor, ante at cursus malesuada, dui lorem gravida urna, eget consequat diam odio in erat. Pellentesque elementum, felis et congue bibendum, sapien leo rhoncus purus, vel efficitur leo ante quis velit. Morbi rhoncus malesuada erat, ut consectetur eros hendrerit quis. In dictum enim ac magna bibendum consectetur.
                </p>
            </div>
        </main>
    )
}