import styled from "styled-components";

export const StyledTags = styled.div`
	.tags-container {
		display: flex;
		flex-wrap: wrap;
	}
	.tag-item {
		display: block;
        margin 5px 10px;
		padding: 15px;
		text-transform: lowercase;
		background: ${({ theme }) => theme.inBetween};
        border-radius: 5px;
	}
    .tags-container a {
        text-decoration: none;
    }
    .tags-container a:hover {
        text-decoration: none;
        background: #4cb8c4; /* fallback for old browsers */
		background: -webkit-linear-gradient(
			to right,
			#4cb8c4,
			#3cd3ad
		); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to right,
			#4cb8c4, 
			#3cd3ad
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
	
`;
