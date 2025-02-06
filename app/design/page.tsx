
import Link from 'next/link';


export default function Design_Page() {
    return (
        <div className="grandparent">
            <div className="parent">
                <h1>Photogrammetry Models</h1>
                <img src="./design/photogrammetry_1.png" width='100%' />
                <p>A miniature model of me, scanned with a phone camera, split into its component parts, processed in Blender, and printed in multiple colors.</p>

                <h1>3D Model/Printing Collection</h1>

                <div className="row">
                    <div className="column">
                        <Link href="/design/voronoi_shield"><h2>Voronoi shield</h2></Link>
                        <img src="./design/bunny_voronoi.png" />
                        <p>A generative design was implemented in Blender using geometry nodes. The model consists of two layers of Voronoi shield and a low-poly fluorescent core. Based on user input, the model can be parametrized.</p>
                    </div>
                    <div className="column">
                        <h2>Barcode roots</h2>
                        <img src="./design/bunny_barcode.png" />
                        <p>The model was inspired by a transparent/black barcode pattern with a natural growing structure following the shortest path between several given points on the mesh.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <h2>Traveling over the vertices</h2>
                        <img src="./design/bunny_tsp.png" />
                        <p>The model design is inspired by the <Link href="https://en.wikipedia.org/wiki/Travelling_salesman_problem">Traveling Salesman Problem algorithm</Link>, where a traveler must visit all the vertices of a grid only once. The bunny has an outer TSP mesh implemented in Blender Python editor, a hollow edge structure, and a low-polygonal inner body.
                        </p>
                    </div>
                    <div className="column">
                        <h2>Generative crystals</h2>
                        <img src="./design/bunny_sharp.png" />
                        <p>A generative design was implemented in Blender using geometry nodes. The model consists of a low-poly solid structure, its fractured counterpart, and procedurally growing crystals.
                        </p>

                    </div>
                </div>

            </div>
            <div className="div_bg_image">&nbsp;</div>
        </div>
    );
}