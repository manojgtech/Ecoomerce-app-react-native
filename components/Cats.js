<View style={{marginTop:10,backgroundColor:'white'}}>
              <Text style={{color:'black',fontSize:30,marginTop:20,justifyContent:'center'}}>Featured products</Text>
           {cload ? < ActivityIndicator size="large" />  :  <Carousel
              ref={(c) => { this._carousel = c; }}
              data={products}
              renderItem={renderItem}
              sliderWidth={400}
              itemWidth={260}
              layoutCardOffset={`18`}
            />}
            </View>


