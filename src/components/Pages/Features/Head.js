import styled from 'styled-components'
import { mixins , theme} from '../../../style'
const { fontSizes , colors , mediaQueries } = theme
//root
const Root = styled.div`
background-color: ${colors.blueBg};
color: ${colors.white};
`

//container
const Container = styled.div`
${mixins.container}
`

const HeadDiv = styled.div`
${mixins.grid};
${mixins.py_3};
height: 270px;

@media (max-width: ${mediaQueries.tablet}px){
    grid-template-columns: 1fr;
    height: auto;
    ${mixins.textCenter};
}
`

const Heading = styled.h1`
font-size: ${fontSizes.xl};
`

const Paragraph = styled.p`
font-size: ${fontSizes.sm};
font-weight: 200;
`

const Image = styled.img`
width: 200px;
justify-self: right;

@media (max-width: ${mediaQueries.tablet}px){
    justify-self: center;
}
`

const Head = () => {
return(
    <Root>
        <Container>
            <HeadDiv>
                <div>
                    <Heading>Features</Heading>
                    <Paragraph>
                        Check out the features of Leroku that separate us from the competition
                    </Paragraph>
                </div>
                <Image src="/server.png" alt="serverImage" />
            </HeadDiv>
        </Container>
    </Root>
    )
}

export default Head