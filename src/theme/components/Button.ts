import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
    // The styles all button have in common
    baseStyle: {
        fontWeight: 'normal',
        // textTransform: 'uppercase',
        borderRadius: '0px', // <-- border radius is same for all variants and sizes
    },
    // Two sizes: sm and md
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4, // <-- px is short for paddingLeft and paddingRight
            py: 3, // <-- py is short for paddingTop and paddingBottom
        },
        md: {
            fontSize: 'md',
            px: 6, // <-- these values are tokens from the design system
            py: 4, // <-- these values are tokens from the design system
        },
    },
    // Two variants: outline and solid
    variants: {
        outline: {
            border: '1px solid',
            borderColor: 'black',
            color: 'black',
        },
        solid: {
            bg: 'black',
            color: 'white',
            _hover: {
                color: 'black'
            }
        },
    },
    // The default size and variant values
    defaultProps: {
        size: 'md',
        variant: 'solid',
    },
}