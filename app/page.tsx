import Link from 'next/link';
import logoImg from '@/assets/ap_logo.jpg';

export default function Home() {
  return (

    <div className="grandparent">
      <div className="parent">

        <div className='ap'>
          <div className='ap_user'><img src={logoImg.src} height="200" />
            <p>Hi, I'm Aliaksei, a PhD in Electrical and Computer Engineering with expertise in Robotics and Control. I am
              highly passionate about additive manufacturing, particularly the application of computer vision in this
              field. My experience includes in-depth knowledge of pattern recognition and texture analysis, along with
              hands-on expertise in object segmentation and point cloud processing. I also have a strong background in
              embedded sensor systems and motor control. I am enthusiastic about integrating computer vision and augmented
              reality technologies with intelligent sensor systems to address complex manufacturing challenges.</p>
          </div>

          <div className="icons">
            <p>
              <Link href="https://www.linkedin.com/in/apetsiuk/"><img src="/icons/simple-icons--linkedin.png"
                height="20" /></Link>
              <Link href="https://github.com/apetsiuk"><img src="/icons/cib--github.png" height="20" /></Link>
              <Link href="https://scholar.google.ca/citations?user=XB6nkzsAAAAJ&hl=en&oi=ao"><img
                src="/icons/academicons--google-scholar.png" height="20" /></Link>
              <Link href="https://www.researchgate.net/profile/Aliaksei-Petsiuk"><img
                src="/icons/simple-icons--researchgate.png" height="20" /></Link>
              <Link href="https://mtu.academia.edu/AliakseiPetsiuk"><img src="/icons/simple-icons--academia.png"
                height="20" /></Link>
              <Link href="https://www.printables.com/@apetsiuk_2192484"><img
                src="/icons/simple-icons--printables.png" height="20" /></Link>
              <Link href="https://medium.com/@apetsiuk"><img src="/icons/lineicons--medium.png"
                height="20" /></Link>
              <br />
            </p>
            <div className="ap_keywords">
              additive manufacturing | fabrication optimization | computer vision | machine learning | procedural
              design<br /><br />
            </div>

          </div>
        </div>

        <hr />

        <h1>Vision</h1>
        <p>
          <img src="/home/vision_img.jpg" height="180" />
          The future of advanced additive manufacturing (AM) envisions a transformative era where precision, efficiency,
          and scalability redefine how we design and produce components across industries. Emerging technologies such as
          artificial intelligence, machine learning, and computer vision will enable real-time quality assurance, adaptive
          process control, and optimized material usage. Integration of augmented reality and digital twins will enhance
          design visualization, streamline prototyping, and facilitate predictive maintenance of AM systems. Advanced
          materials, including multi-functional composites and bio-compatible polymers, will expand the scope of
          applications, from aerospace and healthcare to construction and consumer goods. Furthermore, the synergy of AM
          with intelligent sensor networks and IoT platforms promises a shift toward fully automated, decentralized, and
          sustainable manufacturing ecosystems. This future vision underscores the pivotal role of additive manufacturing
          in driving innovation, fostering sustainability, and enabling complex designs that were once unimaginable.
        </p>

        <h1>Research</h1>
        <p>
          To strengthen the capabilities of AM technology, it is necessary to optimize the process of preparing a part for
          3-D printing (slicing) and provide analysis systems that can detect and minimize the impact of emerging defects.
          The increasing complexity of geometric shapes and the number of materials used require optimization of
          fabrication processes and layer-by-layer monitoring of production processes for timely response.</p>

        <img src="/home/research_img.png" width='100%' />


        <p>This work presents several conceptually new approaches to FFF AM 3-D printer work volume monitoring and anomaly
          detection and localization based on monocular computer vision, machine learning, and synthetic data, as well as
          to increasing efficiency and reducing production waste in multi-color fabrication. Thus, a system for
          automatically creating a labeled G-code-based synthetic 3-D printing dataset was developed, providing
          layer-by-layer semantic segmentation of a printing part and its structural elements during the manufacturing
          process. A method has been developed for the procedural simulation of ideal fabrication by generating layer-wise
          photorealistic images of the manufactured part for further use as references for visual analysis at each
          manufacturing stage. To monitor the height, external contour, and internal structure of the manufactured object,
          a multi-stage approach based on computer vision has been developed, which allows analyzing images of each
          printed layer for compliance with the source 3-D model. A new fabrication method has been developed for
          multi-color printing to reduce energy and material costs for single-nozzle systems. The presented developments
          formed the basis for the concept of multifaceted visual analysis of 3-D printing processes. This will help
          improve FFF AM technology and reduce the amount of time, materials, and energy required to fabricate physical
          objects.</p>

        <h1>Selected Publications</h1>

        <p>A full list of the publications can be accessed on <Link
          href="https://scholar.google.ca/citations?hl=en&user=XB6nkzsAAAAJ">Google Scholar</Link></p>

        <ol>
          <li><i><b>A. Petsiuk,</b> J.M. Pearce.</i> Open source computer vision-based layer-wise 3D printing
            analysis. <i>Additive Manufacturing <b>2020,</b></i> 36, 101473, <a
              href="https://doi.org/10.1016/j.addma.2020.101473">doi:10.1016/j.addma.2020.101473</a>.</li>
          <li><i>A.M. Pringle, S. Oberloier, <b>A. Petsiuk,</b> P.G. Sanders, J.M. Pearce.</i> Open source arc analyzer:
            Multi-sensor monitoring of wire arc additive manufacturing. <i>HardwareX <b>2020,</b></i> 8,
            e00137, <a href="https://doi.org/10.1016/j.ohx.2020.e00137">doi:10.1016/j.ohx.2020.e00137</a>.</li>
          <li><i><b>A. Petsiuk,</b> J.M. Pearce.</i> Open source filament diameter sensor for recycling, winding, and
            additive manufacturing machines. <i>Journal of Manufacturing Science and Engineering <b>2021,</b></i> 143
            (10), 105001, <a href="https://doi.org/10.1115/1.4050762">doi:10.1115/1.4050762</a>.</li>

          <li><i><b>A. Petsiuk,</b> J.M. Pearce.</i> Towards Smart Monitored AM: Open Source in-Situ Layer-wise 3D
            Printing Image Anomaly Detection Using Histograms of Oriented Gradients and a Physics-Based Rendering Engine.
            <i>Additive Manufacturing <b>2022,</b></i> 52, 102690, <a
              href="https://doi.org/10.1016/j.addma.2022.102690">doi:10.1016/j.addma.2022.102690</a>.
          </li>
          <li><i><b>A. Petsiuk,</b> B. Lavu, R. Dick, J.M. Pearce.</i> Waste Plastic Direct Extrusion Hangprinter.
            <i>Inventions <b>2022,</b></i> 7, 70, <a
              href="https://doi.org/10.3390/inventions7030070">doi:10.3390/inventions7030070</a>.
          </li>
          <li><i><b>A. Petsiuk,</b> H. Singh, H. Dadhwal, J.M. Pearce.</i> Synthetic-to-real Composite Semantic
            Segmentation in Additive Manufacturing. <i>Journal of Manufacturing and Materials Processing <b>2024,</b></i>
            8 (2),
            66, <a href="https://doi.org/10.3390/jmmp8020066">doi:10.3390/jmmp8020066</a>.</li>
          <li><i><b>A. Petsiuk,</b> B. Bloch, D. Vogt, M. Debora, J.M. Pearce.</i> Tool change reduction for multicolor
            fused filament fabrication through interlayer tool clustering implemented in PrusaSlicer. <i>Rapid Prototyping
              Journal <b>2024,</b></i>
            30 (8), 1592-1609, <a href="https://doi.org/10.1108/RPJ-01-2024-0050">doi: 10.1108/RPJ-01-2024-0050</a>.
          </li>
        </ol>

      </div>
      <div className="div_bg_image">&nbsp;</div>
    </div>
  );
}
