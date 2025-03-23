import harvard from '../public/image/certificate/CS50AI.png';
import ocigai from '../public/image/certificate/OracleGAI.png';
import ocifa from '../public/image/certificate/OCI.png';
import azai from '../public/image/certificate/AZAI900.png';
import aza from '../public/image/certificate/AZ104.png';
import gh from '../public/image/certificate/git.png';

export const certiImage = (skill) => {
    const id = skill.toLowerCase();
    switch (id) {
        case 'cs50':
            return harvard;
        case 'ocigai':
            return ocigai;
        case 'ocifa':
            return ocifa;
        case 'azai':
            return azai;
        case 'aza':
            return aza;
        case 'gh':
            return gh;
        default:
            return null;
    }
}