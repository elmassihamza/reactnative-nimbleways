import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={27} height={25} viewBox="0 0 27 25" fill="none" {...props}>
      <Path fill="url(#pattern0)" d="M0 0H27V25H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#image0"
            transform="matrix(.02058 0 0 .02222 -.004 0)"
          />
        </Pattern>
        <Image
          id="image0"
          width={49}
          height={45}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAtCAYAAAAHiIP8AAAFPklEQVRoBe2Z2Ss1fxzHj53Ivu/7WpIL5Ua5cKtIIRdSIjeWEuWCC0VKSW7ckCjcuLJESlGKP0Bk32WL7Pvn1/v79JnmzHOGczhnfp7nMfVtZs45M/N5fT/vz/Kdo6O/YNP9BQxkUYi3tzd6fX2l5+dnenl5IZxbYrMoBAy/vb2l3d1dur6+FkAAMTeMxSAAcHZ2RgMDA5SdnU3t7e3i/PHx8c+AgHwuLy8FQHJyMtnb21NgYCA1NjbSyckJGQJh6UF+PIz1mFk9wQ8/PT2l/v5+ioiIIEdHR7KxsREgnp6eVFdXR9vb2/T09CTFCa67v78XkoPseECKmJCPJGhWiIeHBzo6OqKuri4KDQ0lBwcHsra2JisrK7G3tbUVHqmurqbl5WW6u7sTIFdXVzQzM0NtbW3U0tJCra2tYvT29tLe3p74DUDVNrNCIICbm5spKChIMp4BsOfh6+tLFRUVAgQegWfKy8sFtE6nIx5xcXE0OTkpvKEGgM+/DAFXQ+Pr6+vU0NAgeQAGwxg2XH6OGPHx8aGioiJaWVmhpaUlKi4u/g0iOjqaRkdHLQ8BCe3s7FBtba2QCvTPhvOMKvf4HjLz8PCgzMxMMdsFBQUCgmFxTUxMDI2NjVkWAjqFFCorK8nd3Z3s7OzE7HMcKI3nc4ZAjCDwExMTKS0tTQS/EmJ8fFxKAGqS+pScICFkE8igtLRUzCgMggFsBO/ZcOUe3wMWnkMCgMSU18TGxtLExISUocwCwakOhWxhYYHy8/PJxcVFCkSloV89N3tgMwDS4uzsLOXm5goJwQNfNVbtekBMTU2ZxxMAgP4RxIuLi5SVlUWurq5CCpCAUgZqRpn6eXx8/NcgYDTPPgPMz89TRkaGCEbo2VSjTP09PIGYQPyhcqttqoHNsw8A9EFwa3p6Ojk7O4uANNWgz/ze399fVPGDg4N3M5QqBIzHQAwMDQ1RSkqKZh5gYMQbCl5HRwfd3Nyodr96ECwf7JGBzs/Pqaenh1JTU6VGzlL6Z8PlezwLtScqKkq0M2jtYRfsk296EDz73EqjE0WuRh6X31zLY4CghqADrq+vFxOLfksOogeBL/CDi4sL4YHw8HBxAy2CWG1iAIGCiOHl5UVVVVW0v7+vF+gSBLwAD6D17ezspODgYCEhLeWjBMGzeeA7xIifnx/V1NSIxpE9omO3AODw8JCamprI29tbXCC/gfIBWp3LbcAxPII+raysTDSeiBEdewCtNFZdYWFhIgZADRlh4GKtjDb0HDyfbYFdCHasSQoLC2ljY+MXBIpJX18fYT2MOICUsLAJCAgQOkRgGbq5Vp/BaKw/QkJCJNtwjKxVUlLya1EESaEeHB8fC0mhuEBam5ub1N3dTZGRkf8rBOQzODhIW1tbBNvkA0tbKbABwimW9ygwKHQo/1rNuqHnIEaxTMWLA7YNsYBj2C1BoHhwkPMxLhoeHiY0YoZurtVnDAHZw0bl0IOQV0EcM8R38QQgDG0fQnwnOf1AGCsn5HOk44SEBNE0onE0NJKSksjNzc3oGiSPCYvLCdUU+RwSnJubUx0jIyNicYXG0pi+THMIFEl+RYnlrKGB1zw5OTnk5ORkVDegOQSq/erq6m9pUJ4W0YXiRQPeOX1bT6ytrenVHKWO5RDG1BrNPYH/IYyFMHax9QOBim1KsUN2+vGE7L8Jeaz823JCSjS1AYScUCeMDWykWPmMqx1/2hNfhUCvr7bJU6wxS1+zQKAXwix/NNA3YdkIT7wHgZVZXl6eeCWKNfN79+U3HNPT06L6G5qY/wC8v4iiKVRG2QAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
