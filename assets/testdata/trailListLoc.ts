import { Trail, TrailPath, Coordinate } from "@/src/types"
import dayjs from 'dayjs';

const now = dayjs();


const coord1: TrailPath[] = [{
    trail_id: 1,
    coordlist: [
        {latitude: 37.49976944085449,longitude: 126.95149673916133},
        {latitude: 37.499809705612975,longitude: 126.95151989147575},
        {latitude: 37.4998398937723,longitude: 126.95154072892944},
        {latitude: 37.49986808362542,longitude: 126.95157013120514},
        {latitude: 37.500002321243855,longitude: 126.95168263899201},
        {latitude: 37.50003910477698,longitude: 126.9517114350547},
        {latitude: 37.500077362176604,longitude: 126.95175959047174},
        {latitude: 37.50012245337034,longitude: 126.95177368557225},
        {latitude: 37.500145473548635,longitude: 126.95180619030728},
        {latitude: 37.500157877874436,longitude: 126.95184010284709},
        {latitude: 37.500183719845175,longitude: 126.95188133475882},
        {latitude: 37.500220737113715,longitude: 126.9519156089244},
        {latitude: 37.500256794447594,longitude: 126.95194224921502},
        {latitude: 37.50028976442297,longitude: 126.95197871352015},
        {latitude: 37.500319197328416,longitude: 126.95201112837302},
        {latitude: 37.500357949070946,longitude: 126.95201990907607},
    ]}
];
export default coord1;