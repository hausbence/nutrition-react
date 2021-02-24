import styled from "styled-components";

export const StyledToggleSwitch = styled.div`
	.toggle-switch {
		position: relative;
		width: 80px;
		vertical-align: middle;
	}
	.toggle-switch-checkbox {
		display: none;
	}
	.toggle-switch-label {
		display: block;
		overflow: hidden;
		cursor: pointer;
		border-radius: 20px;
	}
	.toggle-switch-label:focus {
		outline: none;
	}
	.toggle-switch-label:focus > span {
		box-shadow: 0 0 2px 5px red;
	}
	.toggle-switch-label > span:focus {
		outline: none;
	}
	.toggle-switch-inner {
		display: block;
		width: 100%;
		transition: margin 0.8s ease-in 0s;
	}
	.toggle-switch-inner:before,
	.toggle-switch-inner:after {
		text-align: center;
		display: block;
		width: 100%;
		height: 34px;
		padding: 0;
		line-height: 34px;
		font-size: 14px;
		color: white;
		font-weight: bold;
		box-sizing: border-box;
	}
	.toggle-switch-inner:before {
		content: attr(data-yes);
		text-transform: uppercase;
		background-color: ${({ theme, checked }) => (checked ? "#888" : "#2F855A")};
		color: #fff;
	}
	.toggle-switch-disabled {
		background-color: #ddd;
		cursor: not-allowed;
	}
	.toggle-switch-disabled:before {
		background-color: #ddd;
		cursor: not-allowed;
	}
	.toggle-switch-inner:after {
		content: attr(data-no);
		text-transform: uppercase;
		background-color: ${({ theme, checked }) => (checked ? "#2F855A" : "#888")};
		color: #fff;
	}
	.toggle-switch-checkbox:checked + .toggle-switch-label .toggle-switch-inner {
		margin-left: 0;
	}
	.toggle-switch-checkbox:checked + .toggle-switch-label .toggle-switch-switch {
		right: 0px;
	}
	.toggle-switch.small-switch {
		width: 40px;
	}
	.toggle-switch.small-switch .toggle-switch-inner:after,
	.toggle-switch.small-switch .toggle-switch-inner:before {
		content: "";
		height: 20px;
		line-height: 20px;
	}
	.toggle-switch.small-switch .toggle-switch-switch {
		width: 16px;
		right: 20px;
		margin: 2px;
	}
	@media screen and (max-width: 991px) {
		.toggle-switch {
			transform: scale(0.9);
		}
	}
	@media screen and (max-width: 767px) {
		.toggle-switch {
			transform: scale(0.825);
		}
	}
	@media screen and (max-width: 575px) {
		.toggle-switch {
			transform: scale(0.75);
		}
	}
`;
