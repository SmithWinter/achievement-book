import React, {Component} from 'react'

export default class UploadImage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        let { name, onChange , srcData} = this.props;
        return (
            <div>
                <img src={srcData} alt=""/>
                <button>
                    <input 
                        type = 'file'
                        accept = 'image/*'
                        onChange={(e) => {
                            this.encodeImageFileAsURL(e.target.files[0], (base64Img) => {
                                onChange(name, base64Img);
                            });
                        }}
                    />
                </button>
            </div>
        );
    }
    encodeImageFileAsURL = (file, callback) => {
        let reader = new FileReader();
        reader.onloadend = function(){
            callback(reader.result);
        }
        reader.readAsDataURL(file);
    }
}