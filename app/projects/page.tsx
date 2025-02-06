
import Link from 'next/link';

export default function Projects_Page() {
    return (
        <div className="grandparent">
            <div className="parent">
                <h1>Projects</h1>
                <p>This section consists of individual projects dedicated to robotics, 3D modeling and printing, and computer vision.
                </p>

                <div className="row">
                    <div className="column">
                        <h2>Robot with vision-based control</h2>
                        <img src="./projects/jackal_1 (2).jpg" width='100%' />
                        <p>Development of a ROS package for remote control of a robot equipped with a computer vision system.
                        </p>
                    </div>
                    <div className="column">
                        <h2>Arduino motor control</h2>
                        <img src="./projects/Fig_1 (3).jpeg" />

                        <p>Description
                        </p>

                    </div>

                </div>




                <div className="row">
                    <div className="column">
                        <h2>Camera projections visualization</h2>
                        <img src="./projects/camera_model.png" width='80%' />

                        <p>Camera frustum simulation implemented in Python.
                        </p>

                    </div>
                    <div className="column">
                        <h2>4F optical correlator simulation</h2>
                        <img src="./projects/4F_correlator.jpg" width='100%' />
                        <p>The 4F Optical Correlator system is based on the Fourier transforming properties of lenses. According to the Diffraction theory, a convex lens of focal length f will produce the Fourier transform at a distance f behind the lens of an object placed at f distance in front of the lens. These properties give us an opportunity to implement direct and inverse Fourier transforms of two-dimensional objects and modify and analyze their spatial frequency spectra.
                        </p>
                    </div>
                </div>


                <div className="row">
                    <div className="column">
                        <h2>Filament diameter sensor</h2>
                        <img src="./projects/filament_diameter_sensor.jpg" width='100%' />
                        <p>Description.</p>
                    </div>
                    <div className="column">
                        <h2>Plastic recycling</h2>
                        <img src="./projects/plastic_recycling.png" />
                        <p>Description</p>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <h2>Snow coverage estimation</h2>
                        <img src="./projects/snow_coverage.png" />

                        <p>Description
                        </p>

                    </div>
                    <div className="column">
                        <h2>Visual porosity analysis</h2>
                        <img src="./projects/porosity.png" />
                        <p>Description.
                        </p>

                    </div>
                </div>



                <div className="row">
                    <div className="column">
                        <h2>Procedural blender presets</h2>
                        <img src="./projects/procedural_blender2.png" />

                        <p>Description
                        </p>

                    </div>
                    <div className="column">
                        <h2>Domain adaptation</h2>
                        <img src="./projects/domain_adaptation.png" width='100%' />
                        <p>Description.
                        </p>

                    </div>
                </div>


                <div className="row">
                    <div className="column">
                        <h2>Visually impaired assistant</h2>
                        <img src="./projects/ultrasound_bracelet.jpg" width='100%' />
                        <p>Description.</p>
                    </div>
                    <div className="column">
                        <h2>MiG welder fourier analysis</h2>
                        <img src="./projects/fourier_analysis2.png" width='100%' />
                        <p>Description.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <h2>Hangprinter</h2>
                        <img src="./projects/hangprinter.png" width='100%' />
                        <p>Description.</p>
                    </div>
                    <div className="column">
                        <h2>Fourier analysis</h2>
                        <img src="./projects/fourier_analysis.png" width='100%' />
                        <p>Description.</p>
                    </div>
                </div>









            </div>
            <div className="div_bg_image">&nbsp;</div>
        </div>
    );
}