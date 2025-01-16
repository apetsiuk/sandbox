
import Link from 'next/link';


export default function Design_Page() {
    return (
        <div className="grandparent">
            <div className="parent">
                <h1>Photogrammetry Models</h1>
                <p>Description</p>

                <h1>3D Model/Printing Collection</h1>
                
                <div className="row">
                    <div className="column">
                        <Link href="/design/voronoi_shield"><h2>Voronoi Shield</h2></Link>
                        <img src="/design/bunny_voronoi.png" />
                        <p>A generative design implemented in Blender using geometry nodes. The model consists of two layers
                            of voronoi shield and a low-poly fluorescent core. The model can be parametrized based on user input.</p>
                    </div>
                    <div className="column">
                        <h2>Barcode Bunny</h2>
                        <img src="/design/bunny_barcode.png" />
                        <p>To strengthen the capabilities of AM technology, it is necessary to optimize the process of
                            preparing a part
                            for 3-D printing (slicing) and provide analysis systems that can detect and minimize the impact
                            of emerging defects.
                            The increasing complexity of geometric shapes and the number of materials used require
                            optimization of
                            fabrication processes and layer-by-layer monitoring of production processes for timely response.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <h2>TSP Bunny</h2>
                        <img src="/design/bunny_tsp.png" />
                        <p>To strengthen the capabilities of AM technology, it is necessary to optimize the process of
                            preparing a part
                            for 3-D printing (slicing) and provide analysis systems that can detect and minimize the impact
                            of emerging defects.
                            The increasing complexity of geometric shapes and the number of materials used require
                            optimization of
                            fabrication processes and layer-by-layer monitoring of production processes for timely response.
                        </p>
                    </div>
                    <div className="column">
                        <h2>Crystal Bunny</h2>
                        <img src="/design/bunny_sharp.png" />
                        <p>To strengthen the capabilities of AM technology, it is necessary to optimize the process of
                            preparing a part
                            for 3-D printing (slicing) and provide analysis systems that can detect and minimize the impact
                            of emerging defects.
                            The increasing complexity of geometric shapes and the number of materials used require
                            optimization of
                            fabrication processes and layer-by-layer monitoring of production processes for timely response.
                        </p>

                    </div>
                </div>

            </div>
            <div className="div_bg_image">&nbsp;</div>
        </div>
    );
}