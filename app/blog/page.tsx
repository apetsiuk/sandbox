import Link from 'next/link';

export default function Blog_Page() {
    return (
        <div className="grandparent">
            <div className="parent">
                <h1>Blog</h1>
                <p>Here are some of my articles that I published on Medium.</p>

                <div className="row">
                    <div className="column">
                        <Link href="https://medium.com/@apetsiuk/evolution-of-image-segmentation-methods-2022-100-architectures-751f7b5f7a04">
                            <h3>Evolution of Image Segmentation Methods (2022): 100+ Architectures</h3></Link>
                     
                        <p><img src="./blog/blog_1.png" />Image segmentation is the process of partitioning a digital image into multiple meaningful regions sharing similar characteristics. Each pixel thus has a certain label that determines whether it belongs to a certain class. This adds a separate logical channel that determines the presence and location of individual physical objects and simplifies subsequent analysis.</p>
                    </div>
                    <div className="column">
                        <Link href="https://medium.com/@apetsiuk/leetcode-interview-question-statistics-how-to-run-your-own-analytical-report-in-2022-1b202ae48902">
                            <h3>LeetCode: Interview question statistics</h3></Link>

                        <p><img src="./blog/blog_2.png" />
                            Comparative statistical analysis of top interview problems by topics, complexity, and popularity. This overview may help you choose the optimal preparation strategy and automatically analyze any other tasks, depending on the need.</p>
                    </div>
                </div>
            </div>
            <div className="div_bg_image">&nbsp;</div>
        </div>
    );
}