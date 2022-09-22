import { extendTheme } from "@chakra-ui/react";

const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
  };

export const mainTheme = extendTheme({
    colors:{
        navbar:{
            yellow:'#FFCB30',
            green:{
                100: '#2CAA6E',
                200: '#56D02B',
            }
        }
    },
    fontSizes:{ //de modificat
        navbar:{
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "7vw",
        }    
    },
    components: {
        Form: {
          variants: {
            floating: {
              container: {
                _focusWithin: {
                  label: {
                    ...activeLabelStyles
                  }
                },
                "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                  ...activeLabelStyles
                },
                label: {
                  top: 0,
                  left: 0,
                  zIndex: 2,
                  position: "absolute",
                  backgroundColor: "white",
                  pointerEvents: "none",
                  mx: 3,
                  px: 1,
                  my: 2,
                  transformOrigin: "left top"
                }
              }
            }
          }
        }
      }

});
