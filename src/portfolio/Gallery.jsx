import Tabs from "./Tabs";
import Items from "./Items";
import Data from "./Data";
import { useState } from "react";
function Gallery() {

    const [data, setData] = useState(Data);
    const categoryData = Data.map((value) => {
        return value.category
    });
    const tabsData = ["all", ...new Set(categoryData)];

    const filterCategory = (category) => {
        if (category == "all") {
            setData(Data);
            return;
        }
        const filteredData = Data.filter((value) => {
            return value.category == category;
        })
        setData(filteredData);
    }
    return (
        <section>

            <div className="custom-bg">
                <div className="row">
                    <div className="col-sm-1">

                    </div>
                    <div className="col-sm-10">
                        <Tabs filterCategory={filterCategory} tabsData={tabsData} />
                        <Items data={data} />
                    </div>
                    <div className="col-sm-1">

                    </div>
                </div>

            </div>
        </section>

    )
}

export default Gallery;