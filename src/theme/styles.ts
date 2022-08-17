import { StyleFunctionProps } from '@chakra-ui/theme-tools'

export const styles = {
    global: (props: StyleFunctionProps) => ({
        html: {
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            
        },
        body: {
            fontFamily: "canada-type-gibson, sans-serif",
            fontStyle: "normal",
            fontSize:  "14px",
            
        },
        'body::-webkit-scrollbar': {
            display: "none"
        }, 
    }),
}