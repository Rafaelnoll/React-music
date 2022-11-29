import { HeroSectionContainer, HeroSectionImageContainer, TextsHeroSection } from "./styles";
import { AiFillHeart } from "react-icons/ai";
import Singer from "../../assets/imgs/heroSectionSinger.svg";

export function HeroSection() {
	return (
		<HeroSectionContainer>
			<TextsHeroSection>
				<span>Currated playlist</span>

				<div className="text-container">
					<strong>R & B Hits</strong>
					<p>
						All mine, Lie again, Petty call me everyday,
						Out of time, No love, Bad habit,
						and so much more
					</p>
				</div>

				<p className="likes"><AiFillHeart /> 33k Likes</p>
			</TextsHeroSection>
			<HeroSectionImageContainer>
				<img src={Singer} />
			</HeroSectionImageContainer>
		</HeroSectionContainer>
	);
}
