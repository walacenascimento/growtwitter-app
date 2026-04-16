import { PageExplorer } from "./pageExplorer";
import { PageFeed } from "./pageFeed";
import { PageProfile } from "./pageProfile";

export function PageHome(){
    return(
        <>
        <PageExplorer />
        <PageFeed />
        <PageProfile />

        </>
    )
}