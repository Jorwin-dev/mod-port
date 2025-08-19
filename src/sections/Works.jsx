import { useRef, useState } from "react"


const Works = () => {
    const overlayRefs = useRef([]);
    const previewRefs = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(null);
    const text = "Featured projects that have been meticulously crafted with passion to drive results and impact";

    const mouse = useRef({ x: 0, y: 0 });
    const moveX = useRef(null);
    const moveY = useRef(null);
  return (
    <div>
      
    </div>
  )
}

export default Works
