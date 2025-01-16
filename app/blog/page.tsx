

export default function Blog_Page() {
    return (
        <div className="grandparent">
            <div className="parent">
                <h1>Blog</h1>
                <p>Description</p>

                <div className="row">
                    <div className="column">
                        <h4>Evolution of Image Segmentation Methods (2022): 100+ Architectures</h4>
                        <img src="./blog/blog_1.png" />
                        <p>To strengthen the capabilities of AM technology, it is necessary to optimize the process of preparing a part
                            for 3-D printing (slicing) and provide analysis systems that can detect and minimize the impact of emerging defects.
                            The increasing complexity of geometric shapes and the number of materials used require optimization of
                            fabrication processes and layer-by-layer monitoring of production processes for timely response.</p>
                    </div>
                    <div className="column">
                        <h4>LeetCode: Interview question statistics & how to run your own analytical report in 2022</h4>
                        <img src="./blog/blog_2.png" />
                        <p>To strengthen the capabilities of AM technology, it is necessary to optimize the process of preparing a part
                            for 3-D printing (slicing) and provide analysis systems that can detect and minimize the impact of emerging defects.
                            The increasing complexity of geometric shapes and the number of materials used require optimization of
                            fabrication processes and layer-by-layer monitoring of production processes for timely response.</p>
                    </div>
                </div>
            </div>
            <div className="div_bg_image">&nbsp;</div>
        </div>
    );
}