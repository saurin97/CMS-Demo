import React from 'react';
// import Option from 'shared/components/form/option';
import { RouteComponentProps, withRouter } from 'react-router';

const LoginWrapper: React.FC<{ className?: string } & RouteComponentProps> = (props) => {
	return (
		<div className={`gray-bg login-wrapper ${props.className || ''}`}>
			<div className='middle-box loginscreen animated fadeInDown'>
				<div>
					{/* <div className='language-dropdown'>
						<select
							data-testid='language-dropdown'
							value={'en'}
							className='form-control'
							onChange={(e) => {
								return false	
							}}
						>
							<Option name={'English'} value='en' />
						</select>
					</div> */}
					<div className='text-center' data-testid='logo'>
						<svg viewBox="0 0 604 112" className={props.className || ""}>
							<path fillRule="evenodd" clipRule="evenodd" d="M147.772 63.7965L143.034 61.9665C138.289 60.2415 138.289 59.5945 138.289 58.6115C138.289 57.4465 138.29 54.9015 144.434 55.0265C153.19 55.2045 158.443 57.7455 158.443 57.7455V47.6995L157.353 47.2775C153.303 45.7135 148.655 44.8505 144.268 44.8505C133.529 44.8505 127.369 49.6855 127.369 58.1155C127.369 66.1005 133.127 69.2535 138.165 71.1185L143.286 72.9335C148.24 74.6965 149.174 75.2965 149.174 76.7015C149.174 78.1565 149.174 80.8635 142.287 80.8635C137.534 80.8635 133.491 79.6985 128.766 76.9645L126.213 75.4865V87.0665L127.131 87.5425C131.37 89.7445 136.722 90.9575 142.204 90.9575C153.626 90.9575 160.177 85.8815 160.177 77.0315C160.177 69.1445 154.798 66.4705 147.772 63.7965Z" />
							<path fillRule="evenodd" clipRule="evenodd" d="M180.831 46.0054V30.0654L169.912 34.5054V90.1314H180.831V55.4394H191.874L189.551 46.0054H180.831Z" />
							<path fillRule="evenodd" clipRule="evenodd" d="M221.673 45.0162C217.208 45.0162 213.131 46.7952 210.239 49.8132V45.6762H199.652V90.1312H210.405V71.6622C210.405 69.2892 210.469 65.8082 211.029 63.0132C211.612 60.2822 215.104 55.1902 219.69 55.1902C221.194 55.1902 223.424 55.5302 225.503 57.1452L227.062 58.3582L232.493 48.6962L231.25 47.8112C228.618 45.9302 225.484 45.0162 221.673 45.0162Z" />
							<path fillRule="evenodd" clipRule="evenodd" d="M256.14 54.3926C261.877 54.3926 265.935 57.4506 266.737 62.1696H244.459C245.776 57.3226 250.088 54.3926 256.14 54.3926ZM256.204 44.7676C242.753 44.7676 233.357 54.2296 233.357 67.7806C233.357 81.9096 242.292 91.0396 256.121 91.0396C264.869 91.0396 270.381 88.2976 274.203 85.9076L275.003 85.4076V74.1536L272.052 76.0606C268.237 78.5316 264.631 81.1006 256.783 80.8636C249.425 80.6416 244.883 77.0986 244.257 71.0806H276.658L276.813 69.0636C276.846 68.2566 276.904 67.5076 276.904 66.0456C276.904 52.9196 268.972 44.7676 256.204 44.7676Z" />
							<path fillRule="evenodd" clipRule="evenodd" d="M313.026 77.1979C310.731 79.6299 307.926 80.8639 304.693 80.8639C301.454 80.8639 298.647 79.6279 296.367 77.2049C293.999 74.6139 292.848 71.5839 292.848 67.9439C292.848 64.3589 293.999 61.3569 296.367 58.7689C298.669 56.2509 301.39 55.0269 304.693 55.0269C307.996 55.0269 310.717 56.2509 313.019 58.7689C315.386 61.3569 316.538 64.3589 316.538 67.9439C316.538 71.5809 315.389 74.6069 313.026 77.1979ZM316.87 49.0689C313.227 46.3779 308.978 45.0159 304.197 45.0159C298.161 45.0159 292.888 47.2729 288.515 51.7359C284.256 56.1709 282.094 61.6249 282.094 67.9439C282.094 74.2319 284.252 79.7109 288.527 84.2519C292.888 88.7009 298.161 90.9569 304.197 90.9569C308.95 90.9569 313.197 89.5739 316.87 86.8329V89.3889H327.789V46.1929L316.87 47.5749V49.0689Z" />
							<path fillRule="evenodd" clipRule="evenodd" d="M388.87 44.9332C383.078 44.9332 377.597 47.5982 373.924 52.0512C371.461 47.4342 366.646 44.9332 360.041 44.9332C355.224 44.9332 350.458 46.8862 347.038 50.0602V45.8422H336.451V90.1312H347.205V65.8792C347.205 63.5522 347.715 61.6232 348.74 60.1252C350.816 56.9792 354.29 55.0272 357.81 55.0272C360.947 55.0272 362.919 55.9712 364.177 58.0452C364.94 59.3952 365.361 61.9722 365.361 65.3012V90.1312H376.033V65.9622C376.033 63.0442 376.866 61.1792 377.566 60.1252C379.642 56.9792 383.118 55.0272 386.64 55.0272C391.214 55.0272 392.538 56.5742 393.143 57.7462C393.807 59.0222 394.189 61.8062 394.189 65.3842V90.1312H404.86V63.1532C404.86 61.5182 404.72 55.9212 402.94 52.4712C400.321 47.3292 395.849 44.9332 388.87 44.9332Z" />
							<path fillRule="evenodd" clipRule="evenodd" d="M433.814 80.7828C430.169 80.7828 427.763 80.2228 425.934 79.5748V66.8718C425.934 64.1338 426.51 61.7538 427.502 60.3628C429.849 57.1768 433.258 55.2738 436.623 55.2738C443.551 55.2738 447.063 59.2858 447.063 67.2008C447.063 79.0198 438.763 80.7828 433.814 80.7828ZM438.77 45.0158C433.837 45.0158 429.134 46.8718 425.768 49.9708V25.8518H415.18V87.5928L416.343 87.9798C422.358 89.9818 427.856 90.9568 433.154 90.9568C448.65 90.9568 457.902 81.8908 457.902 66.7048C457.902 53.1238 450.751 45.0158 438.77 45.0158Z" />
							<path fillRule="evenodd" clipRule="evenodd" d="M477.678 80.7828C476.44 80.7828 476.333 80.5478 476.319 80.5408C476.2 80.1868 476.074 79.2098 476.074 77.5278V25.8518H465.488V77.7738C465.488 81.1458 465.667 83.7918 466.545 85.7398C468.116 89.2488 471.162 90.9568 475.861 90.9568C478.01 90.9568 480.068 90.5518 481.973 89.7518L483.015 89.3128V78.9768L480.632 80.0158C479.425 80.5428 478.255 80.7828 477.678 80.7828Z" />
							<path fillRule="evenodd" clipRule="evenodd" d="M516.824 77.1979C514.53 79.6299 511.725 80.8639 508.491 80.8639C505.253 80.8639 502.445 79.6279 500.165 77.2049C497.798 74.6139 496.646 71.5839 496.646 67.9439C496.646 64.3589 497.798 61.3569 500.165 58.7689C502.467 56.2509 505.188 55.0269 508.491 55.0269C511.794 55.0269 514.515 56.2509 516.817 58.7689C519.185 61.3569 520.336 64.3589 520.336 67.9439C520.336 71.5809 519.187 74.6069 516.824 77.1979ZM520.668 49.0689C517.026 46.3779 512.776 45.0159 507.995 45.0159C501.959 45.0159 496.687 47.2729 492.314 51.7359C488.054 56.1709 485.893 61.6249 485.893 67.9439C485.893 74.2319 488.05 79.7109 492.326 84.2519C496.687 88.7009 501.959 90.9569 507.995 90.9569C512.748 90.9569 516.995 89.5739 520.668 86.8329V89.3889H531.588V46.1929L520.668 47.5749V49.0689Z" />
							<path fillRule="evenodd" clipRule="evenodd" d="M559.247 63.7965L554.508 61.9665C549.762 60.2415 549.762 59.5945 549.762 58.6115C549.762 57.4465 549.762 54.9825 555.907 55.0265C561.662 55.0685 569.917 57.7235 569.917 57.7235V47.6995L568.827 47.2775C564.776 45.7135 560.13 44.8505 555.742 44.8505C545.003 44.8505 538.844 49.6855 538.844 58.1155C538.844 66.1005 544.601 69.2535 549.639 71.1185L554.76 72.9335C559.714 74.6965 560.649 75.2965 560.649 76.7015C560.649 78.1565 560.649 80.8635 553.76 80.8635C549.009 80.8635 544.964 79.6985 540.24 76.9645L537.688 75.4865V87.0665L538.605 87.5425C542.844 89.7445 548.196 90.9575 553.677 90.9575C565.101 90.9575 571.651 85.8815 571.651 77.0315C571.651 69.1445 566.271 66.4705 559.247 63.7965Z" />
							<path fillRule="evenodd" clipRule="evenodd" d="M601.02 46.0054H592.305V30.0654L581.385 34.5054V90.1314H592.305V55.4394H603.347L601.02 46.0054Z" />
							<path fillRule="evenodd" clipRule="evenodd" d="M55.2992 46.4356L55.3262 46.4146L43.4292 32.7276L47.5832 51.6576L36.4662 43.3816L37.6802 47.8306L43.6232 69.5926L33.5012 63.4986L34.9032 67.1876L35.0892 67.6736L35.2172 68.1766C35.5012 69.2966 35.9202 70.3986 36.4612 71.4526L36.6482 71.8166C37.2202 72.8586 37.8462 73.7686 38.5592 74.5906C44.2182 81.0996 54.0922 81.8146 60.5722 76.1816C66.9962 70.5966 67.7072 60.8396 62.2032 54.3296L62.0242 54.1266L55.2992 46.4356ZM68.8657 48.2018C68.8735 48.2093 68.8814 48.217 68.8892 48.2256C77.8492 58.5336 76.7962 74.1226 66.5362 83.0416C56.2742 91.9616 40.6912 90.8336 31.7312 80.5266C30.4592 79.0636 29.4142 77.4886 28.5432 75.8516L28.5172 75.8676L28.4072 75.5756C27.5462 73.9026 26.8852 72.1626 26.4312 70.3786L15.7362 42.2386L28.9372 50.1856L20.8192 20.4516L33.5392 29.9186L26.9682 0.000610352L68.8402 48.1686L68.8372 48.1716C68.8457 48.1824 68.8555 48.1919 68.8657 48.2018ZM37.4655 110.289C10.9905 103.696 -5.12252 76.9133 1.47948 50.4693L10.9345 52.8233C5.63548 74.0523 18.5695 95.5523 39.8235 100.845C61.0775 106.138 82.6035 93.2193 87.9025 71.9913C89.2645 66.5323 89.4485 60.9603 88.4935 55.5493C87.8365 51.8333 86.6485 48.2303 84.9715 44.8473C79.8345 34.4853 70.4645 26.8213 59.0135 23.9693L61.3715 14.5253C75.6265 18.0753 87.3115 27.6323 93.7055 40.5293C95.7925 44.7393 97.2715 49.2273 98.0895 53.8583C99.2815 60.6063 99.0525 67.5573 97.3575 74.3453C90.7565 100.79 63.9425 116.882 37.4655 110.289Z" />
						</svg>
					</div>
					<br/>
					{/* <h1 className='logo-name'>CMS</h1> */}
					{props.children}
				</div>
			</div>

		</div>
	)
}

export default withRouter(LoginWrapper);