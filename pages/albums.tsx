import NavMenu from "../components/NavMenu";
import AlbumCover from "../components/AlbumCover";

export default function Albums() {
    return (
        <div className="h-full overflow-auto">
            <NavMenu />
            <div className="flex p-10 text-center text-2xl">
                <h1>Albums</h1>
            </div>
            <div className="flex w-full h-full px-40">
                <div className="grid-container grid grid-cols-2 gap-10 place-items-center ">
                    <AlbumCover src="/photos/DSC01375.jpg" alt="me" />
                    <img className="" src="/photos/DSC01375.jpg" alt="me" />
                    <img className="" src="/photos/DSC02356~2.jpg" alt="me" />
                    <img className="" src="/photos/DSC02177~2.jpg" alt="me" />
                    <img className="" src="/photos/PXL_20220420_155038836.jpg" alt="me" />
                </div>
            </div>
        </div>
        ) 
}