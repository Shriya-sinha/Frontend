import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import Text from './Text';
import { useTheme } from '@mui/material/styles';

export default function AMCSection() {
    const breakPoint = useMediaQuery('(min-width:600px)');
    const breakPoint2 = useMediaQuery('(min-width:950px)');

    const theme = useTheme();

    const container = {
        hidden: {
            opacity: 1,
        },
        show: {
            opacity: 1,
            transition: {
                delay: 1,
                staggerChildren: 3.3, // Adjust the stagger delay as needed
            },
        },
    };

    const textContainer = {
        hidden: {
            opacity: 1,
        },
        show: {
            opacity: 1,
            transition: {
                delay: 2,
                staggerChildren: 0.8,
                // Adjust the stagger delay as needed
            },
        },
    };

    const amcText1 = {
        hidden: {
            opacity: 0,

            y: '-200%',
        },
        show: {
            y: 0,
            opacity: 1,
        },
    };
    const amcText2 = {
        hidden: {
            opacity: 0,

            y: '-100%',
        },
        show: {
            y: 0,
            opacity: 1,
        },
    };
    const amcText3 = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
        },
    };

    const bhuText = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
        },
    };

    const text = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <motion.div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: breakPoint2 ? 'row' : 'column',
                gap: breakPoint2 ? '30px' : '50px',
                padding: '75px 100px',
                backgroundColor: 'rgba(0,0,0)',
                position: 'relative',
            }}
            viewport={{ once: false, amount: 0.7 }}
            variants={container}
            initial="hidden"
            whileInView="show"
        >
            <motion.div
                style={{
                    width: 'auto',
                    textAlign: 'center',
                }}
                variants={textContainer}
                transition={{
                    duration: 0.6,
                }}
            >
                <Typography
                    color="white"
                    variant="h1"
                    style={{
                        fontSize: `${breakPoint ? '120px' : '60px'}`,
                        letterSpacing: 3,
                    }}
                    display="grid"
                    justifyItems="center"
                >
                    <motion.div
                        style={{ width: '100%', zIndex: 2 }}
                        variants={amcText2}
                    >
                        <Text word="Aero" />
                    </motion.div>
                    <motion.div
                        style={{ width: '100%', zIndex: 3 }}
                        variants={amcText2}
                    >
                        <Text word="Modelling" />
                    </motion.div>
                    <motion.div
                        style={{ width: '100%', zIndex: 4 }}
                        variants={amcText2}
                    >
                        <Text word="club" />
                    </motion.div>
                    <motion.div variants={bhuText}>
                        <Typography
                            color="white"
                            variant="h2"
                            style={{
                                fontSize: '20px',
                            }}
                        >
                            {' '}
                            IIT (BHU), Varanasi
                        </Typography>
                    </motion.div>
                </Typography>
            </motion.div>
            <motion.div
                viewport={{ once: false, amount: 0.7 }}
                transition={{
                    duration: 0.8,
                }}
                variants={text}
                style={{
                    maxWidth: breakPoint2 ? '45%' : '100%',
                }}
            >
                <Typography
                    variant="h3"
                    lineHeight="2"
                    color="rgba(255,255,255,0.8)"
                    fontSize={`${breakPoint ? '28px' : '18px'}`}
                    textAlign="center"
                >
                    A community of builders with a passion for aviation,
                    fostering a culture of intellectual curiosity and
                    collaboration.
                </Typography>
            </motion.div>
        </motion.div>
    );
}
