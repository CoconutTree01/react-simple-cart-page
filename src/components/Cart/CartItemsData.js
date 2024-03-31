import gigabyteImage from './CartImages/gigabyteImage.jpeg'
import processorImage from './CartImages/processorImage.jpg'
import videocardImage from './CartImages/videocardImage.jpg'

const cartItems = [
    {
        productName: "Gigabyte B650E Aorus Master",
        productDescription: "Gigabyte's B650E Aorus Master is a well-designed, well-rounded board that costs less than X670E alternatives. At ropughtly $500, it definitely blurs the line between the full-featured X670 chipset at around. But it's also equipped much like a high-end board, with four PCIe 5.0 M.2 sockets, many USB ports on the rear IO, and the robust VRMs found on the pricier X670E Aorus Master. It also performed as expected in our testing and benchmarks.",
        price: 460.31,
        quantity: 1,
        image: gigabyteImage
    },
    {
        productName: "RTX 4080",
        productDescription: "Supercharge your PC with the NVIDIA® GeForce RTX™ 4080 SUPER and RTX 4080. Bring your games and creative projects to life with accelerated ray tracing and AI-powered graphics. They're powered by the ultra-efficient NVIDIA Ada Lovelace architecture and 16GB of super-fast G6X memory.",
        price: 1300.50,
        quantity: 1,
        image: videocardImage
    },
    {
        productName: "Intel® Core™ i9 processor 14900K ",
        productDescription: "Featuring Intel Thermal Velocity Boost, Intel® Turbo Boost Max Technology 3.0 Frequency, PCIe 5.0 & 4.0 support, DDR5 and DDR4 support, unlocked Intel® Core™ i9 desktop processors are optimized for enthusiast gamers and serious creators to help deliver high performance.",
        price: 600.43,
        quantity: 1,
        image: processorImage
    },

];
export default cartItems;