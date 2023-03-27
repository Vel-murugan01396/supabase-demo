import React from "react";

function HomePageComponent() {
    return <section className="w-full h-96 bg-slate-900">
        <div className="h-full flex flex-col items-center justify-center">
            <div>
                <span className="text-3xl text-gray-400">Build in a weekend,&nbsp;</span>
                <span className="text-3xl text-white">scale to millions</span>
            </div>
        <button className="mt-8 w-fit bg-emerald-500 hover:bg-emerald-300 text-white p-3 rounded-md">Start your project</button>
        </div>
    </section>;
}

export default HomePageComponent;